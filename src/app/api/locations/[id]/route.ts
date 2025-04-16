import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

interface PathParams {
  params: {
    id: string;
  };
}

// GET a single location by ID
export async function GET(request: Request, { params }: PathParams) {
  try {
    const { id } = params;
    
    const { data, error } = await supabase
      .from('locations')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { error: 'Location not found' },
          { status: 404 }
        );
      }
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching location:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT to update a location
export async function PUT(request: Request, { params }: PathParams) {
  try {
    const { id } = params;
    const locationData = await request.json();
    
    const { data, error } = await supabase
      .from('locations')
      .update(locationData)
      .eq('id', id)
      .select();
    
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    
    if (data.length === 0) {
      return NextResponse.json(
        { error: 'Location not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(data[0]);
  } catch (error) {
    console.error('Error updating location:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE a location
export async function DELETE(request: Request, { params }: PathParams) {
  try {
    const { id } = params;
    
    const { error } = await supabase
      .from('locations')
      .delete()
      .eq('id', id);
    
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    
    return NextResponse.json(
      { message: 'Location deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting location:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 