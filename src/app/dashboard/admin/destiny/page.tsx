import { GetAllDestination } from '@/lib/api/destination';
import React from 'react';
import Destiny from '@/app/components/DestinyA';
import { BookingItem } from '@/types';

const AllDestiny = async () => {
 
  const alldestiny: BookingItem[] = await GetAllDestination();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6 container mx-auto">
      {alldestiny && alldestiny.length > 0 ? (
        alldestiny.map((destiny) => (
          <Destiny key={destiny.id || destiny._id?.toString()} destiny={destiny} />
        ))
      ) : (
        <p className="text-gray-400 text-center col-span-full">No destinations found.</p>
      )}
    </div>
  );
};

export default AllDestiny;