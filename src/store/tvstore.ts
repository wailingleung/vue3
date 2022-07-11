import { reactive } from "vue";
const api = "https://api.tvmaze.com";

interface Itv {
    id: Number,
    name: string,
    genres: string[],
    rating: { average: Number },
    summary: string,
    image: { medium: string,
            original: string
    },
    language: string
}

const store = {
    state: reactive({
        tvs: <Itv[]>[],
        tvsDetail: <Itv[]>[],
        tvsSearch: <Itv[]>[],
        search: 'Joker',
        loading: true,
    }),
    setTvs(tvs: Itv[]): void {
        this.state.tvs = tvs;
    },
    async getTvs(): Promise<void> {
        const result = await fetch(`${api}/shows`).then(
            (response) => response.json()
        );
        this.setTvs(result);
    },
    setTvsDetail(tvsDetail: Itv[]): void {
        this.state.tvsDetail = tvsDetail;
    },
    async getTvsDetail(id: Number): Promise<void> {
        const result = await fetch(`${api}/shows/${id}?embed=cast`).then(
            (response) => response.json()
        );
        this.setTvsDetail(result);
    },
    setTvsSearch(tvsSearch: Itv[]): void {
        this.state.tvsSearch = tvsSearch;
    },
    async getTvsSearch(search: string): Promise<void> {
        const result = await fetch(`${api}/search/shows?q=${search}`).then(
            (response) => response.json()
        );
        this.setTvsSearch(result);
    },
};

export default store;
