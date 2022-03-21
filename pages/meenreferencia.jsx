import { useState } from 'react';

import prisma from '../lib/prisma';
import Config from '../components/meenreferencia/Config';
import Warning from '../components/common/Warning';

const Meenreferencia = ({ data, token }) => {
  const [values, setValues] = useState(data);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAction = async (target, operation = 'increment') => {
    setLoading(true);

    try {
      const response = await fetch('/api/meenreferencia', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ target, operation }),
      });

      if (!response.ok) {
        throw new Error('No token');
      }

      const { data: newData } = await response.json();

      setValues(newData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="mb-24">
      {error && <Warning className="mb-10">{error}</Warning>}

      <div className="grid grid-flow-row gap-5 md:grid-flow-col">
        {(values || []).map((value) => (
          <div
            key={value.id}
            className="p-3 border border-gray-border-interactive hover:border-gray-border-hover"
          >
            <div className="text-center text-xl capitalize">{value.id}</div>

            <div className="mt-10 mb-10 text-center text-6xl">
              {value.count}
            </div>

            <div className="flex">
              <div className="w-10/12 my-2">
                <button
                  disabled={loading}
                  className="bg-gray-background-component hover:bg-gray-background-hover active:bg-gray-background-active text-gray-font-low hover:text-gray-font-high border-gray-border-interactive hover:border-gray-border-hover focus:outline-none focus:ring focus:border-gray-border-interactive focus:ring-gray-border-interactive w-full h-7 border rounded-lg"
                  onClick={() => handleAction(value.id)}
                >
                  Sumar
                </button>
              </div>

              <div className="w-2/12 mt-2 mr-2 mb-2 flex justify-end">
                <Config
                  value={value}
                  loading={loading}
                  handleAction={handleAction}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const { token = '' } = ctx.query;

  if (!token.length || token !== process.env.TOKEN_MEENREFERENCIA) {
    return {
      redirect: {
        destination: '/',
        permanet: false,
      },
    };
  }

  try {
    const data = await prisma.meenreferencia.findMany();

    return {
      props: {
        data,
        token,
      },
    };
  } catch (error) {
    return {
      props: {
        data: [{ nel: 'nel' }],
        token,
      },
    };
  }
};

export default Meenreferencia;
