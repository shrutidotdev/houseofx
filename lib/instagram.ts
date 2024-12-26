// lib/instagram.ts
import axios from 'axios';

interface InstagramData {
  followers: number;
  engagementRate: number;
}

export async function getInstagramData(username: string): Promise<InstagramData> {
  try {
    // Use Instagram Basic Display API or switch to a more reliable method
    const response = await axios.get(`https://graph.instagram.com/v17.0/${username}`, {
      params: {
        fields: 'followers_count,username',
        access_token: process.env.INSTAGRAM_ACCESS_TOKEN
      }
    });

    // Simulate engagement rate calculation if not provided by API
    const followers = response.data.followers_count || 0;
    const estimatedEngagementRate = calculateEstimatedEngagementRate(followers);

    return {
      followers,
      engagementRate: estimatedEngagementRate
    };
  } catch (error) {
    console.error('Error fetching Instagram data:', error);
    throw new Error('Failed to fetch Instagram data');
  }
}

// Estimated engagement rate based on follower count
function calculateEstimatedEngagementRate(followers: number): number {
  if (followers < 1000) return 5.0;  // Micro-influencers
  if (followers < 10000) return 3.5; // Small accounts
  if (followers < 100000) return 2.5; // Medium accounts
  if (followers < 1000000) return 1.8; // Large accounts
  return 1.2; // Very large accounts
}