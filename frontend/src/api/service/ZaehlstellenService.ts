import FetchService from "@/api/service/FetchService";
import ZaehlstelleHeaderDTO from "@/types/zaehlstelle/ZaehlstelleHeaderDTO";
import LoadDataDTO from "@/types/zaehlstelle/LoadDataDTO";

export default class ZaehlstellenService {
    private static readonly ENDPOINT: string =
        "api/dave-backend-service/zaehlstelle";

    static getById(id: string): Promise<ZaehlstelleHeaderDTO> {
        return FetchService.getData(
            `${this.ENDPOINT}/byId?id=${id}`,
            "Beim holen der Zählstelle ist ein Fehler aufgetreten."
        );
    }

    static loadData(): Promise<LoadDataDTO> {
        return FetchService.getData(
            `${this.ENDPOINT}/loadData`,
            "Error loadData"
        );
    }
}
