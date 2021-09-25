import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async (
  database_id,
  sorts = [],
  filter = undefined
) => {
  try {
    const response = await notion.databases.query({
      database_id,
      sorts,
      filter,
    });
    return response.results;
  } catch (error) {
    return error;
  }
};

export const getPage = async (page_id) => {
  try {
    const response = await notion.pages.retrieve({ page_id });
    return response;
  } catch (error) {
    return error;
  }
};

export const getBlocks = async (block_id) => {
  try {
    const response = await notion.blocks.children.list({
      block_id,
      page_size: 50,
    });
    return response.results;
  } catch (error) {
    return error;
  }
};
