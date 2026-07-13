import Skeleton from 'react-loading-skeleton';

function PageSkeleton() {
  return (
    <div className="card">
      <Skeleton height={200} />
      <Skeleton height={30} width="70%" style={{ marginTop: 10 }} />
      <Skeleton count={2} />
      <Skeleton width={120} height={40} />
    </div>
  );
}

export default PageSkeleton;