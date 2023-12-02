import ProfileHeader from "../features/developer/Profile-header";

import SummaryCards from "../features/home/components/Summary";
import FullButton from "../features/home/components/FullButton";
export default () => {
  return (
    <>
      <SummaryCards />
      <FullButton />

      <div className="grid gap-3 p-1 lg:grid-cols-12">
        <div className="col-span-12">
          <ProfileHeader />
        </div>
      </div>
    </>
  );
};
