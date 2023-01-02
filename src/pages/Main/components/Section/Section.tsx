import styles from "./Section.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

type Props = {
  title: string;
  description: string;
  itemList: {
    name: string;
    address: string;
    characters: string[];
    recommend: string;
  }[];
  direction: "row" | "column";
};

const Section = ({ title, description, itemList, direction }: Props) => {
  return (
    <section className={cx("container")}>
      <div className={cx("title")}>{title}</div>
      <div className={cx("description")}>{description}</div>
      <div className={cx("boxContainer", direction)}>
        {itemList.map(({ name, address, characters, recommend }) => (
          <div key={name} className={cx("box", direction)}>
            <div className={cx("name")}>{name}</div>
            <div className={cx("address")}>{address}</div>
            <div>
              {characters.map((character, index) => (
                <div className={cx("character")} key={index}>
                  {character}
                </div>
              ))}
            </div>
            <div className={cx("recommend")}>{recommend}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section;
