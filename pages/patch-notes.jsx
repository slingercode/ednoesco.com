import renderBlock from '../components/notion/Block';
import { getBlocks } from '../lib/notion';

const PatchNotes = ({ patchNotes }) => {
  return (patchNotes || []).map((block) => (
    <div key={block.id}>{renderBlock(block)}</div>
  ));
};

export const getStaticProps = async () => {
  const patchNotes = await getBlocks(process.env.NOTION_PATCH_NOTES);

  return {
    props: {
      patchNotes,
    },
    revalidate: 10,
  };
};

export default PatchNotes;
