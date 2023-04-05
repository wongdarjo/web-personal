import Image from "next/image";
import { IconCalendar, IconPencil } from "../Icon";

type ArticleDetailProps = {
  title: string;
  content: string;
  date: string;
  author: string;
  image?: string;
  tags?: string[];
};

const ArticleDetail = ({
  title,
  content,
  date,
  author,
  image,
  tags,
}: ArticleDetailProps) => {
  return (
    <section className="u-safe-area">
      <div className="container">
        <div className="prose mx-auto dark:prose-invert md:prose-base md:max-w-screen-sm lg:max-w-screen-md">
          {image && (
            <div className="aspect-w-16 aspect-h-9 mb-6 md:mb-8">
              <Image
                className="!m-0 h-full w-full rounded-lg object-cover"
                src={image}
                alt={title}
                width={500}
                height={500}
              />
            </div>
          )}
          <h1>{title}</h1>
          <div className="mb-6 flex border-spacing-2 justify-between border-b border-t border-dashed border-slate-500 py-2 dark:border-slate-200">
            <span className="flex items-center gap-1 text-sm">
              <IconPencil />
              {author}
            </span>
            <span className="flex items-center gap-1 text-sm">
              <IconCalendar />
              {date}
            </span>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}></div>
          {tags && (
            <div className="mt-8 flex gap-4 border-t border-b border-dashed border-slate-500 py-2 dark:border-slate-200 md:mt-12">
              <span>
                <b>Tags:</b>
              </span>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                {tags.map((item: string) => {
                  return <span>#{item}</span>;
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ArticleDetail;
