export function extractId(url: string): string {
    return url.slice(url.lastIndexOf('/') + 1);
}
