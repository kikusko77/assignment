import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const bzn = searchParams.get('bzn');
    const start = searchParams.get('start');
    const end = searchParams.get('end');

    const externalApiUrl = `https://api.energy-charts.info/price?bzn=${bzn}&start=${start}&end=${end}`;
    const response = await fetch(externalApiUrl);

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}
