import { NextResponse } from 'next/server';
import { join } from 'path';
import { readFile } from 'fs/promises';

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'public', 'files', 'cv_krisna_rusdiono.pdf');
    const fileBuffer = await readFile(filePath);

    // Convert Buffer to Uint8Array for the response
    const uint8Array = new Uint8Array(fileBuffer);

    return new NextResponse(uint8Array, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="cv_krisna_rusdiono.pdf"',
      },
    });
  } catch (error) {
    console.error({ error })
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}
