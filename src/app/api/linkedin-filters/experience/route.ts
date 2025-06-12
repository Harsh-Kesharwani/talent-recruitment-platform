// src/app/api/linkedin-filters/job-title/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json();

    if (!query || typeof query !== 'string') {
      return NextResponse.json(
        { error: 'Query parameter is required and must be a string' },
        { status: 400 }
      );
    }

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY!,
        'X-RapidAPI-Host': process.env.RAPIDAPI_HOST!
      },
      body: JSON.stringify({
        query: query.trim()
      })
    };

    const response = await fetch(
      'https://linkedin-sales-navigator-no-cookies-required.p.rapidapi.com/filter_seniority_level',
      options
    );

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    
    return NextResponse.json({
      success: true,
      data: data,
      query: query
    });

  } catch (error) {
    console.error('Job title filter API error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch job title suggestions',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}