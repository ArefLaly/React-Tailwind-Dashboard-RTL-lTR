class Helper {
  static enToFa(input?: string | number, language?: string) {
    const persian = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    if (!input) return "";
    const finalInput = input + "";
    if (language == "english") return input;
    let output = "";
    for (let index = 0; index < finalInput.length; index++) {
      let element = parseInt(finalInput[index]);
      output +=
        persian[element] != undefined ? persian[element] : finalInput[index];
    }
    return output;
  }
}
export default Helper;
