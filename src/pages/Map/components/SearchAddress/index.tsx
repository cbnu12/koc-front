import styles from "./SearchAddress.module.scss";
import classnames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { InView } from "react-intersection-observer";
import { Pagination, Place } from "../../../../common/types";
import Search from "../../../../components/Search";

const cx = classnames.bind(styles);

type Props = {
  queryKeyword?: string;
  setPosition: (place: Place[]) => void;
  setMapCenter: (center: { lat: number; lng: number }) => void;
  onClose: () => void;
};

const SearchAddress = ({
  queryKeyword,
  setPosition,
  setMapCenter,
  onClose,
}: Props) => {
  const [keyword, setKeyword] = useState<string>(queryKeyword ?? "");
  const [results, setResults] = useState<Place[] | undefined>();
  const ps = new kakao.maps.services.Places();
  const [current, setCurrent] = useState<Pagination | undefined>();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (queryKeyword) {
      submitSeachKeywords({ keyword });
    }
  }, []);

  useEffect(() => {
    if (!results) {
      return;
    }

    setPosition(results);
  }, [results]);

  const placesSearchCB = (
    data: Place[],
    status: string,
    pagination: Pagination
  ) => {
    if (status === kakao.maps.services.Status.OK) {
      if (results) {
        setResults([...results, ...data]);
      } else {
        setResults(data);
      }
      setCurrent(pagination);
      console.log(data);
    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
      setResults([]);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter" && keyword.length > 0) {
      submitSeachKeywords({ keyword });
      inputRef.current?.blur();
    }
  };

  const submitSeachKeywords = ({
    keyword,
    page = 1,
    size = 15,
  }: {
    keyword: string;
    page?: number;
    size?: Number;
  }) => {
    setResults([]);
    ps.keywordSearch(keyword, placesSearchCB, { page, size });
  };

  return (
    <div className={cx("container")}>
      <div className={cx("background")} onClick={onClose} />
      <Search
        border
        className={cx("input")}
        value={keyword}
        onChange={onChange}
        onKeyDown={onKeyDown}
        ref={inputRef}
      />
      <section className={cx("resultSection")}>
        {results ? (
          results.length > 0 ? (
            results.map((result) => (
              <div
                key={result.id}
                className={cx("resultItem")}
                onClick={() => {
                  setPosition([result]);
                  setMapCenter({
                    lat: parseFloat(result.y),
                    lng: parseFloat(result.x),
                  });
                  onClose();
                }}
              >
                <div className={cx("name")}>{result.place_name}</div>
                <div className={cx("address")}>{result.address_name}</div>
              </div>
            ))
          ) : (
            <div className={cx("resultItem")}>
              검색 결과가 존재하지 않습니다
            </div>
          )
        ) : undefined}
        <InView
          skip={!current?.hasNextPage}
          onChange={(inView) => {
            if (inView && current) {
              submitSeachKeywords({
                keyword,
                page: current.current + 1,
                size: current.perPage,
              });
            }
          }}
        />
      </section>
    </div>
  );
};

export default SearchAddress;
