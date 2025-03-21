// "use client"
import AddToCart from "@/app/components/AddToCart";
import Container from "@/app/components/Container";
import PriceFormat from "@/app/components/PriceFormat";
import ProductImage from "@/app/components/ProductImage";
import { fetchData } from "@/lib";
import Image from "next/image";
import { FaRegEye } from "react-icons/fa";
import payment from "../../../assets/payment.png";
import { MdStar } from "react-icons/md";
import PriceTag from "@/app/components/PriceTag";

interface Props {
  params: {
    id: string;
  };
}

const SingleProductPage = async ({ params }: Props) => {
  const { id } = params;
  const endpoint = `https://dummyjson.com/products/${id}`;

  try {
    const product = await fetchData(endpoint);

    return (
      <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProductImage product={product} />
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">{product.title}</h2>
          <div className="flex items-center justify-between gap-2">
            <PriceTag
              regularPrice={product?.price + product?.discountPercentage / 100}
              discountedPrice={product?.price - product?.discountPercentage / 100}
            />
            <div className="flex items-center gap-1">
              <div className="text-base flex items-center">
                {Array.from({ length: 5 }).map((_, index) => {
                  const filled = index + 1 <= Math.floor(product?.rating);
                  const halfFilled =
                    index + 1 > Math.floor(product?.rating) &&
                    index < Math.ceil(product?.rating);
                  return (
                    <MdStar
                      key={index}
                      className={`${
                        filled
                          ? "text-colors-amazonYellowDark"
                          : halfFilled
                          ? "text-colors-amazonOrangeDark"
                          : "text-colors-lightText"
                      }`}
                    />
                  );
                })}
              </div>
              <p className="text-base font-semibold">
                {`( ${product?.rating.toFixed(1)} reviews)`}
              </p>
            </div>
          </div>
          <p className="flex items-center">
            <FaRegEye className="mr-1" />
            <span className="font-semibold mr-1">250+</span> people are viewing
            this right now
          </p>
          <p>
            Your are saving
            <span className="text-base font-semibold text-green-500">
              <PriceFormat amount={product?.discountPercentage / 100} />
            </span>
            upon purchase
          </p>
          <div>
            <p className="text-sm tracking-wide">{product?.description}</p>
            <p className="text-base">{product?.warrantyInformation}</p>
          </div>
          <p>
            Brand: <span className="font-medium">{product?.brand}</span>
          </p>
          <p>
            Category:
            <span className="font-medium capitalize">{product?.category}</span>
          </p>
          <p>
            Tags:{" "}
            {product?.tags.map((item, index) => (
              <span key={index} className="font-medium capitalize">
                {item}
                {index < product?.tags?.length - 1 && ", "}
              </span>
            ))}
          </p>
          <AddToCart product={product} />
          <div className="bg-[#f7f7f7] p-5 rounded-md flex flex-col items-center justify-center gap-2">
            <Image
              src={payment}
              alt="payment"
              className="w-auto object-contain"
            />
            <p className="font-semibold">Guaranteed safe & secure checkout</p>
          </div>
        </div>
        <div
          className="p-10 bg-[#f7f7f7] col-span-2 flex items-center flex-wrap gap-5
       md:gap-10"
        >
          {product?.reviews?.map((item, index) => (
            <div
              key={`${item?.reviewerName}-${index}`}
              className="bg-white/80 p-5 border-[1px] border-colors-amazonYellowDark/50 rounded-md
          hover:border-colors-amazonYellowDark hover:bg-white duration-200 flex flex-col gap-1"
            >
              <p className="text-base font-semibold">{item?.comment} </p>
              <div className="text-xs ">
                <p className="font-semibold">{item?.reviewerName}</p>
                <p>{item?.reviewerEmail} </p>
              </div>
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, index) => (
                  <MdStar
                    key={index}
                    className={`${
                      index < item?.rating
                        ? "text-colors-amazonOrangeDark"
                        : "text-colors-lightText"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    );
  } catch (error) {
    return <div>Error loading product details.</div>;
  }
};

export default SingleProductPage;