import prisma from '../../../lib/prisma';

const handleGet = async (_, res) => {
  try {
    const data = await prisma.meenreferencia.findMany();

    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const handlePut = async (req, res) => {
  try {
    const headers = req.rawHeaders;

    const autorization = headers.filter((value) => value.includes('Bearer'));

    if (!autorization.length) {
      return res.status(500).json({ message: 'No token' });
    }

    const token = autorization[0].split('Bearer ')[1];

    if (token !== process.env.TOKEN_MEENREFERENCIA) {
      return res.status(500).json({ message: 'Bad token' });
    }

    const { target = '', operation = 'increment' } = req.body;

    await prisma.meenreferencia.update({
      data: {
        count: {
          increment: operation === 'increment' ? 1 : undefined,
          decrement: operation === 'decrement' ? 1 : undefined,
        },
      },
      where: { id: target },
    });

    const data = await prisma.meenreferencia.findMany();

    res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const handler = async (req, res) => {
  switch (req.method) {
    case 'GET':
      return handleGet(req, res);

    case 'PUT':
      return handlePut(req, res);

    default:
      return res.status(200).json('def');
  }
};

export default handler;
