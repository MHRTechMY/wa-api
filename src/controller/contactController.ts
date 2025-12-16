import { Request, Response } from 'express';

export default class ContactController {
  static async getContactPnLid(req: Request, res: Response) {
    /**
      #swagger.tags = ["Contacts"]
      #swagger.autoBody=false
      #swagger.security = [{
              "bearerAuth": []
      }]
      #swagger.parameters["session"] = {
          schema: '60123456789'
      }
      #swagger.parameters["pnLid"] = {
          schema: '60123456789@lid'
      }
      */
    const { pnLid } = req.params;

    if (!pnLid) {
      return res.status(400).json({
        status: 'error',
        message: 'Phone Number or LID (pnLid) parameter is required',
      });
    }

    try {
      const response = await req.client.getPnLidEntry(pnLid);
      res.status(200).json(response);
    } catch (error) {
      req.logger.error(error);
      res.status(500).json({
        status: 'error',
        message: 'Error on get contact by PN-LID',
        error: error,
      });
    }
  }
}
