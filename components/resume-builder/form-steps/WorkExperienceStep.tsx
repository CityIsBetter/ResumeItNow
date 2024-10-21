import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { DatePickerComponent } from '../components/DatePicker';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { FormValues } from '../types';

interface WorkExperienceStepProps {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  fields: Record<"id", string>[];
  append: () => void;
  remove: (index: number) => void;
}

export const WorkExperienceStep = ({
  register,
  errors,
  fields,
  append,
  remove,
}: WorkExperienceStepProps) => {
  return (
    <div className="space-y-6">
      {fields.map((field, index) => (
        <Card key={field.id} className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Experience {index + 1}</h3>
            <Button 
              type="button" 
              variant="destructive" 
              size="sm"
              onClick={() => remove(index)}
            >
              Remove
            </Button>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Job Title</Label>
              <Input {...register(`workExperience.${index}.jobTitle`)} />
              {errors.workExperience?.[index]?.jobTitle && 
                <p className="text-destructive text-sm">
                  {errors.workExperience[index]?.jobTitle?.message}
                </p>}
            </div>

            <div className="space-y-2">
              <Label>Company Name</Label>
              <Input {...register(`workExperience.${index}.companyName`)} />
              {errors.workExperience?.[index]?.companyName && 
                <p className="text-destructive text-sm">
                  {errors.workExperience[index]?.companyName?.message}
                </p>}
            </div>

            <div className="space-y-2">
              <Label>Location</Label>
              <Input {...register(`workExperience.${index}.location`)} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DatePickerComponent
                label="Start Date"
                register={register}
                schema={`workExperience.${index}.startDate`}
              />
              <DatePickerComponent
                label="End Date"
                register={register}
                schema={`workExperience.${index}.endDate`}
                end={true}
              />
            </div>

            <div className="space-y-2">
              <Label>Job Description</Label>
              <Textarea 
                {...register(`workExperience.${index}.description`)}
                className="min-h-[100px]"
              />
              {errors.workExperience?.[index]?.description && 
                <p className="text-destructive text-sm">
                  {errors.workExperience[index]?.description?.message}
                </p>}
            </div>
          </div>
        </Card>
      ))}

      <Button
        type="button"
        variant="outline"
        onClick={() => append()}
      >
        Add Work Experience
      </Button>
    </div>
  );
};
