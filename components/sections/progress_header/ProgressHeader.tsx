import { container, inside_container } from "./ProgressHeader.style";
import { useTranslations } from "next-intl";
import { ProgressHeaderLeft } from "./progress_header_left";
import { ProgressHeaderRight } from "./progress_header_right";
import { ProgressHeaderCards } from "./progress_header_cards";

const ProgressHeader = () => {
  const t = useTranslations("progress");

  return (
    <section className={container}>
      <div className={inside_container}>
        <ProgressHeaderLeft t={t} />
        <ProgressHeaderRight t={t} />
      </div>
      <ProgressHeaderCards t={t} />
    </section>
  );
};
export default ProgressHeader;
