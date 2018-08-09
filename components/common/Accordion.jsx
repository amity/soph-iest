import { translate } from "react-i18next";
import shortid from "shortid";

import AccordionCard from "./AccordionCard";
import { accordionData } from "../data/accordionData";

const Accordion = ({ t }) => {
  let accordionDataTrans = accordionData(t);
  return (
    <div className="accordion" id="accordionExample">
      {accordionDataTrans.map(questionSection => (
        <AccordionCard key={shortid.generate()} data={questionSection} />
      ))}
    </div>
  );
};

export default translate("accordion")(Accordion);
