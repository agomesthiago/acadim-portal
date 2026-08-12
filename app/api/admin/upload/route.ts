import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminAuth } from '@/lib/admin-auth';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const isAuth = await verifyAdminAuth(req);
    if (!isAuth) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'Nenhum arquivo enviado' }, { status: 400 });
    }

    // Validações
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Tipo de arquivo não suportado' }, { status: 400 });
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB
      return NextResponse.json({ error: 'Arquivo muito grande (máximo 10MB)' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Gerar nome único e sanitizado
    const ext = path.extname(file.name).toLowerCase();
    const hash = crypto.randomBytes(8).toString('hex');
    const safeName = file.name
      .replace(ext, '')
      .replace(/[^a-z0-9]/gi, '-')
      .toLowerCase()
      .substring(0, 50); // limita tamanho
    const fileName = `${safeName}-${hash}${ext}`;

    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'news');
    
    // Garantir que a pasta existe
    await mkdir(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, fileName);
    await writeFile(filePath, buffer);

    const fileUrl = `/uploads/news/${fileName}`;

    return NextResponse.json({ url: fileUrl });

  } catch (error) {
    console.error('Upload Error:', error);
    return NextResponse.json({ error: 'Erro interno ao processar upload' }, { status: 500 });
  }
}
