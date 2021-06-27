import { Request, Response } from "express";
import { ListTagsService } from "../services/ListTagsService";



class ListTagsController {
  async handle(request: Request, response: Response) {
    const listTagService = new ListTagsService();

    const tags = await listTagService.execute();

    return response.json(tags);
  }
}

export { ListTagsController }