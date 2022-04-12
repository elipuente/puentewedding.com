import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: string;
  environment: string;
};

export default function handler(_: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ status: "ok", environment: process.env.NODE_ENV });
}
