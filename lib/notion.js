import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async (database_id) => {
  const response = await notion.databases.query({ database_id });
  return response.results;
};

export const getPage = async (page_id) => {
  const response = await notion.pages.retrieve({ page_id });
  return response;
};

export const getBlocks = async (block_id) => {
  const response = await notion.blocks.children.list({
    block_id,
    page_size: 50,
  });
  return response.results;
};
