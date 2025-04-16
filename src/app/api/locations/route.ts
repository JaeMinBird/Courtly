import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import type { Location } from '@/types/database.types';

// GET all locations
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('locations')
      .select('*')
      .order('name');
    
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching locations:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST to create a new location
export async function POST(request: Request) {
  try {
    const locationData = await request.json();
    
    // Required fields
    const { name, address, city, country } = locationData;
    
    if (!name || !address || !city || !country) {
      return NextResponse.json(
        { error: 'Name, address, city, and country are required' },
        { status: 400 }
      );
    }
    
    const { data, error } = await supabase
      .from('locations')
      .insert([locationData])
      .select();
    
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    
    return NextResponse.json(data[0], { status: 201 });
  } catch (error) {
    console.error('Error creating location:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 