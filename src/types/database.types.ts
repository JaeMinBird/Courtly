export type UserRole = 'admin' | 'coach' | 'member';
export type CourtSport = 'tennis' | 'pickleball' | 'squash';
export type ReservationStatus = 'confirmed' | 'cancelled' | 'completed';

export interface User {
  id: string;
  email: string;
  full_name: string | null;
  role: UserRole;
  created_at: string;
  updated_at: string;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string | null;
  country: string;
  postal_code: string | null;
  created_at: string;
  updated_at: string;
}

export interface Court {
  id: string;
  location_id: string;
  name: string;
  sport: CourtSport;
  indoor: boolean;
  available: boolean;
  created_at: string;
  updated_at: string;
}

export interface CoachProfile {
  id: string;
  bio: string | null;
  experience_years: number | null;
  sports: CourtSport[];
  hourly_rate: number | null;
  profile_image_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface CoachAvailability {
  id: string;
  coach_id: string;
  day_of_week: number; // 0-6 (Sunday-Saturday)
  start_time: string; // HH:MM:SS
  end_time: string; // HH:MM:SS
  location_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface LessonPackage {
  id: string;
  name: string;
  description: string | null;
  lesson_count: number;
  validity_days: number;
  price: number;
  active: boolean;
  created_at: string;
  updated_at: string;
}

export interface MemberPackage {
  id: string;
  member_id: string;
  package_id: string;
  lessons_remaining: number;
  purchase_date: string;
  expiry_date: string;
  created_at: string;
  updated_at: string;
}

export interface CourtReservation {
  id: string;
  court_id: string;
  user_id: string;
  start_time: string;
  end_time: string;
  status: ReservationStatus;
  created_at: string;
  updated_at: string;
}

export interface LessonBooking {
  id: string;
  member_id: string;
  coach_id: string;
  court_id: string | null;
  package_id: string | null;
  start_time: string;
  end_time: string;
  status: ReservationStatus;
  notes: string | null;
  created_at: string;
  updated_at: string;
} 