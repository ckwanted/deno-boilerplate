import BaseController from "../base/base.controller.ts";

export default class AuthController extends BaseController {

    static async login(context: any) {
        context.response.body = "Login";
    }

    static async register(context: any) {
        context.response.body = "Register";
    }

}
