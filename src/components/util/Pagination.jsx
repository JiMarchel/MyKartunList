import { Pagination } from "@nextui-org/react";

const PaginationComponent = ({ initialPage, total, title, page, onChange }) => {

  return (
    <div className="flex flex-col text-center gap-3 mb-5">
      <p className="md:text-lg text-primary-800">Selected Page : {title}</p>
      <Pagination
        className="mx-auto"
        showControls
        initialPage={initialPage}
        total={total}
        page={page}
        onChange={onChange}
      />
    </div>
  );
};

export default PaginationComponent;
