import getCurrentUser from "@/actions/getCurrentUser";
import getListings, { IListingParams } from "@/actions/getListing";
import ClientOnly from "@/components/ClientOnly";
import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";
import ListingCard from "@/components/listing/ListingCard";
import { Suspense } from "react";

// interface HomeProps {
//   searchParams: IListingParams;
// }

export default async function Home() {
  const listings = await getListings({});
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientOnly>
        <Container>
          <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {listings.map((listing) => {
              return (
                <ListingCard
                  key={listing.id}
                  data={listing}
                  currentUser={currentUser}
                />
              );
            })}
          </div>
        </Container>
      </ClientOnly>
    </Suspense>
  );
}
