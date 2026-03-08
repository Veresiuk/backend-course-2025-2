const date = "202302";
const time_period = "month";

const url = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/cpi");

url.searchParams.append("date", date);
url.searchParams.append("time_period", time_period);
url.searchParams.append("json", "");

console.log(url.toString());
