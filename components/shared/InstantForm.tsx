import React from "react";
import { z } from "zod";
import { Control, Path } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import { ContentItem } from "@/types/type";
import Tiptap from "./Tiptap/Tiptap";
import { Checkbox } from "../ui/checkbox";

export const InputForm = <T extends z.ZodType<any, any>>({
  control,
  formName,
  label,
  placeholder,
}: {
  control: Control<z.infer<T>>;
  formName: Path<z.infer<T>>;
  label: string;
  placeholder?: string;
}) => {
  return (
    <FormField
      control={control}
      name={formName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              value={field.value ?? ""}
              onChange={field.onChange}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export const SelectForm = <
  T extends z.ZodType<any, any>,
  ItemTypes extends ContentItem,
>({
  control,
  formName,
  label,
  content,
  placeholder,
  valueKey,
  displayKey,
  disabled,
  onChange,
}: {
  control: Control<z.infer<T>>;
  formName: Path<z.infer<T>>;
  label: string;
  content: ItemTypes[];
  placeholder?: string;
  disabled?: any;
  valueKey: keyof ItemTypes;
  displayKey: keyof ItemTypes;
  onChange?: (value: any) => void;
}) => {
  return (
    <FormField
      control={control}
      name={formName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Select
              onValueChange={(value) => {
                field.onChange(value);
                if (onChange) {
                  onChange(value);
                }
              }}
              value={field.value}
              disabled={disabled}
            >
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent onChange={field.onChange}>
                {content.map((item) => (
                  <SelectItem
                    key={String(item[valueKey])}
                    value={String(item[valueKey])}
                    className="cursor-pointer"
                  >
                    {item[displayKey]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export const TextAreaForm = <T extends z.ZodType<any, any>>({
  control,
  formName,
  label,
  placeholder,
}: {
  control: Control<z.infer<T>>;
  formName: Path<z.infer<T>>;
  label: string;
  placeholder?: string;
}) => {
  return (
    <FormField
      control={control}
      name={formName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Tiptap content={field.value} onChange={field.onChange} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export const CheckboxForm = <T extends z.ZodType<any, any>>({
  control,
  formName,
  label,
  placeholder,
}: {
  control: Control<z.infer<T>>;
  formName: Path<z.infer<T>>;
  label: string;
  placeholder: string;
}) => {
  return (
    <FormField
      control={control}
      name={formName}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Checkbox
              checked={field.value ?? false}
              onCheckedChange={field.onChange}
              {...field}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};
