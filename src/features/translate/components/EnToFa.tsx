import { useTranslation } from "react-i18next";
import Helper from "../../../utils/Helper";

type props = {
  value: string;
};
// this component will convert only English Digit to persian digit if it is possible
const EnToFa = ({ value }: props) => {
  const { t } = useTranslation();
  return Helper.enToFa(value, t("lang").toString());
};
export default EnToFa;
