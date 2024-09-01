import ApiResponceModel from './ApiResponseModel'

export default interface customResultModel {
    result: ApiResponceModel | null;
    error: string | null;
}