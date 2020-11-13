import https from "https";

export function fetch<T>(url: string): Promise<T> {
    return new Promise<T>((resolve, reject) => {
        https.get(url, res => {
            res.setEncoding("utf8");
            let data = "";
            res.on("data", chunk => {
                data += chunk;
            });
            res.on("end", () => {
                resolve(JSON.parse(data));
            });
        }).on('error', reject);
    });
}
