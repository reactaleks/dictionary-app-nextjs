import ErrorOutput from "./data_ouput_components/ErrorOutputComponent";
import DataOutput from "./data_ouput_components/DataOutput";

export default function Output({ apiresponse }: OutputProps) {
  const errorMessage = apiresponse?.data?.message
  console.log(apiresponse)
  if (errorMessage) {
    return <ErrorOutput apiresponse={apiresponse} />;
  } 
  else {
    return <DataOutput apiresponse={apiresponse} />;
  }
}
