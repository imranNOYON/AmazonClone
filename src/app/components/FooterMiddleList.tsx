interface ListData {
  listData: string[];
}

interface Props {
  title: string;
  listItem: ListData[];
}

const FooterMiddleList = ({ title, listItem }: Props) => {
  return (
    <div>
      <h3 className="font-semibold text-white text-base mb-3">{title}</h3>
      <ul className="flex flex-col gap-0.5">
        {listItem?.map((item, itemIndex) =>
          item?.listData.map((data: string, dataIndex) => (
            <li key={`${itemIndex}-${dataIndex}`} className="footerLink">
              {data}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default FooterMiddleList;