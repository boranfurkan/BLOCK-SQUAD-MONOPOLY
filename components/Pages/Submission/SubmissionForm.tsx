"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Textarea } from "@nextui-org/input";
import Dropdown from "@/components/UI/Dropdown";
import { CATEGORY_OPTIONS, GENRE_OPTIONS } from "@/constants";
import PrimaryButton from "@/components/Buttons/PrimaryButton";

const schema = z
  .object({
    trackName: z.string().min(1, "Track name is required"),
    creator: z.string().min(1, "Creator is required"),
    description: z.string().min(1, "Description is required"),
    category: z.string().min(1, "Category is required"),
    genre: z.string().min(1, "Genre is required"),
    image: z.string().optional(),
    audio: z.string().optional(),
    video: z.string().optional(),
  })
  .refine((data) => data.image || data.audio || data.video, {
    message: "One of the media inputs (image, audio, video) is required",
    path: ["image", "audio", "video"],
  });

type FormData = z.infer<typeof schema>;

const SubmissionForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [category, setCategory] = useState<string>("all");
  const [genre, setGenre] = useState<string>("all");

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl mx-auto space-y-6 px-4"
    >
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <Dropdown
          label="Category"
          options={CATEGORY_OPTIONS}
          selectedOptions={category}
          onChange={(value) => setCategory(value as string)}
          selectionType="single"
        />
        <Dropdown
          label="Genre"
          options={GENRE_OPTIONS}
          selectedOptions={genre}
          onChange={(value) => setGenre(value as string)}
          selectionType="single"
        />
      </div>

      <div>
        <label className="block text-white mb-2 font-content-lg-2">
          Track Name
        </label>
        <Controller
          name="trackName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              fullWidth
              isInvalid={errors.trackName ? true : false}
              variant="bordered"
              placeholder="Enter track name"
              classNames={{
                inputWrapper: "!border-primaryBorder",
              }}
            />
          )}
        />
        {errors.trackName && (
          <p className="text-red-500 mt-1">{errors.trackName.message}</p>
        )}
      </div>

      <div>
        <label className="block text-white mb-2 font-content-lg-2">
          Creators
        </label>
        <Controller
          name="creator"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              fullWidth
              isInvalid={errors.creator ? true : false}
              variant="bordered"
              placeholder="Enter creators"
              classNames={{
                inputWrapper: "!border-primaryBorder",
              }}
            />
          )}
        />
        {errors.creator && (
          <p className="text-red-500 mt-1">{errors.creator.message}</p>
        )}
      </div>

      <div>
        <label className="block text-white mb-2 font-content-lg-2">
          Description
        </label>
        <Controller
          name="description"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Textarea
              {...field}
              fullWidth
              rows={4}
              isInvalid={errors.description ? true : false}
              variant="bordered"
              placeholder="Enter description"
              classNames={{
                inputWrapper: "!border-primaryBorder",
              }}
            />
          )}
        />
        {errors.description && (
          <p className="text-red-500 mt-1">{errors.description.message}</p>
        )}
      </div>

      <div>
        <label className="block text-white mb-2 font-content-lg-2">Image</label>
        <Controller
          name="image"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div>
              <input
                type="file"
                accept="image/*"
                {...field}
                className="mb-2 text-white border border-primaryBorder w-full rounded-lg px-4 py-2"
              />
              {errors.image && (
                <p className="text-red-500 mt-1">{errors.image.message}</p>
              )}
            </div>
          )}
        />
      </div>

      <div>
        <label className="block text-white mb-2 font-content-lg-2">Audio</label>
        <Controller
          name="audio"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div>
              <input
                type="file"
                accept="audio/*"
                {...field}
                className="mb-2 text-white border border-primaryBorder w-full rounded-lg px-4 py-2"
              />
              {errors.audio && (
                <p className="text-red-500 mt-1">{errors.audio.message}</p>
              )}
            </div>
          )}
        />
      </div>

      <div>
        <label className="block text-white mb-2 font-content-lg-2">Video</label>
        <Controller
          name="video"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div>
              <input
                type="file"
                accept="video/*"
                {...field}
                className="mb-2 text-white border border-primaryBorder w-full rounded-lg px-4 py-2"
              />
              {errors.video && (
                <p className="text-red-500 mt-1">{errors.video.message}</p>
              )}
            </div>
          )}
        />
      </div>

      <PrimaryButton type="submit" fullWidth className="mt-4">
        Submit Song
      </PrimaryButton>
    </form>
  );
};

export default SubmissionForm;
