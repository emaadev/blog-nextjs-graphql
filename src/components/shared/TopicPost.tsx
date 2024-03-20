import Image from "next/image";

interface TopicPostPros {
  data: any;
}

const TopicPost = ({ data }: TopicPostPros) => {
  return (
    <div>
      <Image src={data.image.url} width={250} height={250} alt="" />
      <h4>{data.title}</h4>
    </div>
  );
};

export default TopicPost;
