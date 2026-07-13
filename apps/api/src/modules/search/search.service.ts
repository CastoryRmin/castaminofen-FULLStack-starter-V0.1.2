import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class SearchService {
  constructor(private readonly prisma: PrismaService) {}

  async search(query: string) {
    const normalized = query.trim();
    if (!normalized) {
      return { query, podcasts: [], episodes: [], users: [], channels: [] };
    }

    const [podcasts, episodes, users, channels] = await Promise.all([
      this.prisma.podcast.findMany({
        where: {
          OR: [
            { title: { contains: normalized, mode: 'insensitive' } },
            { description: { contains: normalized, mode: 'insensitive' } },
          ],
        },
        take: 10,
      }),
      this.prisma.episode.findMany({
        where: {
          OR: [
            { title: { contains: normalized, mode: 'insensitive' } },
            { description: { contains: normalized, mode: 'insensitive' } },
          ],
        },
        take: 10,
      }),
      this.prisma.user.findMany({
        where: {
          OR: [
            { name: { contains: normalized, mode: 'insensitive' } },
            { email: { contains: normalized, mode: 'insensitive' } },
            { username: { contains: normalized, mode: 'insensitive' } },
          ],
        },
        take: 10,
        select: { id: true, name: true, username: true, email: true, avatarUrl: true },
      }),
      this.prisma.channel.findMany({
        where: {
          OR: [
            { name: { contains: normalized, mode: 'insensitive' } },
            { slug: { contains: normalized, mode: 'insensitive' } },
          ],
        },
        take: 10,
      }),
    ]);

    return { query, podcasts, episodes, users, channels };
  }
}
