export default function Home() {
    const query = "/api/proxy?type=artist,song,key,code&num=500&query={query}";

    return (
        <main>
            <code>api strat on: MyHost{query}`</code>
        </main>
    );
}
