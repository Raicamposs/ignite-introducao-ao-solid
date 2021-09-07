import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { user_id } = request.params;
      const user = this.turnUserAdminUseCase.execute({ user_id });
      return response.status(200).send(user);
    } catch (error) {
      const { message } = error;
      return response.status(404).send({ error: message });
    }
  }
}

export { TurnUserAdminController };
