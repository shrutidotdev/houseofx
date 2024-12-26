import { NextRequest, NextResponse } from 'next/server';

interface FacebookGraphUserResponse {
  id: string;
  username?: string;
}

interface InstagramInsightsData {
  followers_count: number;
  media_count: number;
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const username = searchParams.get('username');

  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 });
  }

  const accessToken = process.env.FACEBOOK_GRAPH_ACCESS_TOKEN; 
  const userAccountId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

  if (!accessToken || !userAccountId) {
    return NextResponse.json({ 
      error: 'Instagram access configuration is incomplete' 
    }, { status: 500 });
  }

  try {
    // Step 1: Validate username (optional, but recommended)
    const userSearchResponse = await fetch(
      `https://graph.facebook.com/v19.0/search?type=user&q=${username}&access_token=${accessToken}`
    );

    if (!userSearchResponse.ok) {
      throw new Error('Failed to search for user');
    }

    const searchData = await userSearchResponse.json();
    const matchedUser = searchData.data.find(
      (user: FacebookGraphUserResponse) => user.username?.toLowerCase() === username.toLowerCase()
    );

    if (!matchedUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Step 2: Fetch Instagram Insights
    const insightsResponse = await fetch(
      `https://graph.facebook.com/v19.0/${userAccountId}?fields=followers_count,media_count&access_token=${accessToken}`
    );
    
    if (!insightsResponse.ok) {
      throw new Error('Failed to fetch Instagram insights');
    }

    const insightsData: InstagramInsightsData = await insightsResponse.json();

    // Mock engagement rate calculation (replace with actual calculation if possible)
    const engagementRate = Math.min(
      (insightsData.media_count / insightsData.followers_count) * 100, 
      5
    );

    return NextResponse.json({
      followers: insightsData.followers_count,
      engagementRate: engagementRate / 100, // Convert to decimal
      mediaCount: insightsData.media_count,
    });

  } catch (error) {
    console.error('Instagram API Error:', error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'An unknown error occurred' 
    }, { status: 500 });
  }
}