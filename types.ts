export interface Party {
  id: string;
  name: string;
  logoColor: string;
  logoInitial: string;
  hasCandidateImage: boolean;
  logoUrl?: string;
  candidateImageUrl?: string;
  displayNumber?: number;
}

export interface BallotSection {
  id: number;
  title: string;
  totalSections: number;
  currentSection: number;
}

export interface Candidate {
  id: string;
  number: number;
  name: string;
  imageUrl?: string;
}

export interface VoteRecord {
  sectionId: number;
  partyId: string;
  marks: {
    logo: boolean;
    subItem1: boolean;
    subItem2: boolean;
  };
  prefValues: {
    pref1: number | null;
    pref2: number | null;
  };
}