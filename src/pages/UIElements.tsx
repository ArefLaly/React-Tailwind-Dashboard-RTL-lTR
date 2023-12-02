import FullButton from "../features/home/components/FullButton";
import SummaryCards from "../features/home/components/Summary";

export default () => {
  return (
    <>
      <SummaryCards />
      <FullButton />
      <div className="flex items-center justify-center py-6 bg-white dark:bg-boxdark">
        <a href="https://www.material-tailwind.com/docs/react/installation">
          Click Here for Ui Documentation
        </a>
      </div>
    </>
  );
};
