import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldContent,
  FieldGroup,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "../ui/input-group";

const contactFormSchema = z.object({
  fullname: z
    .string("El nombre no es valido")
    .min(5, "Debe escribir su nombre completo")
    .max(100, "El nombre es muy largo"),
  email: z.email("El correo no es valido"),
  help: z
    .string("Es necesario seleccionar una opción")
    .min(1, "Selecciona una opción"),
  message: z
    .string("Es necesario escribir un mensaje")
    .min(5, "El mensaje es muy corto")
    .max(250, "El mensaje es muy largo"),
  privacy: z
    .boolean("Es necesario aceptar el aviso de privacidad")
    .refine((value) => value, "Es necesario aceptar el aviso de privacidad"),
});

function ContactForm() {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      help: "",
      message: "",
      privacy: false,
    },
  });

  const messageValue = watch("message") ?? "";

  const onSubmit = (data: z.infer<typeof contactFormSchema>) => {
    toast.success("Su mensaje se envío correctamente");
    reset();
  };

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="fullname">
                Nombre completo <span className="text-destructive">*</span>
              </FieldLabel>
              <Input
                id="fullname"
                placeholder="¿Cómo te llamas?"
                aria-invalid={!!errors.fullname}
                {...register("fullname")}
              />
              <FieldError>{errors.fullname?.message}</FieldError>
            </Field>

            <Field>
              <FieldLabel htmlFor="email">
                Correo electrónico <span className="text-destructive">*</span>
              </FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="tu@correo.com"
                aria-invalid={!!errors.email}
                {...register("email")}
              />
              <FieldError>{errors.email?.message}</FieldError>
            </Field>

            <Controller
              name="help"
              control={control}
              render={({ field }) => (
                <Field>
                  <FieldLabel>
                    ¿En qué podemos ayudarte?{" "}
                    <span className="text-destructive">*</span>
                  </FieldLabel>
                  <RadioGroup
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                    onBlur={field.onBlur}
                    aria-invalid={!!errors.help}
                  >
                    <Field orientation="horizontal">
                      <RadioGroupItem value="compra" id="help-compra" />
                      <FieldContent>
                        <FieldLabel htmlFor="help-compra">
                          Quiero adquirir una obra
                        </FieldLabel>
                      </FieldContent>
                    </Field>
                    <Field orientation="horizontal">
                      <RadioGroupItem value="exponer" id="help-exponer" />
                      <FieldContent>
                        <FieldLabel htmlFor="help-exponer">
                          Quiero exponer mi trabajo
                        </FieldLabel>
                      </FieldContent>
                    </Field>
                    <Field orientation="horizontal">
                      <RadioGroupItem value="organizar" id="help-organizar" />
                      <FieldContent>
                        <FieldLabel htmlFor="help-organizar">
                          Quiero organizar una exposición
                        </FieldLabel>
                      </FieldContent>
                    </Field>
                    <Field orientation="horizontal">
                      <RadioGroupItem value="asesoria" id="help-asesoria" />
                      <FieldContent>
                        <FieldLabel htmlFor="help-asesoria">
                          Busco asesoría artística
                        </FieldLabel>
                      </FieldContent>
                    </Field>
                    <Field orientation="horizontal">
                      <RadioGroupItem value="otro" id="help-otro" />
                      <FieldContent>
                        <FieldLabel htmlFor="help-otro">Otro</FieldLabel>
                      </FieldContent>
                    </Field>
                  </RadioGroup>
                  <FieldError>{errors.help?.message}</FieldError>
                </Field>
              )}
            />

            <Field>
              <FieldLabel htmlFor="message">
                Mensaje <span className="text-destructive">*</span>
              </FieldLabel>
              <InputGroup>
                <InputGroupTextarea
                  id="message"
                  placeholder="Escriba su mensaje"
                  aria-invalid={!!errors.message}
                  {...register("message")}
                />
                <InputGroupAddon align="block-end">
                  <InputGroupText className="text-xs text-muted-foreground">
                    {messageValue.length}/250 caracteres
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              <FieldError>{errors.message?.message}</FieldError>
            </Field>

            <Controller
              name="privacy"
              control={control}
              render={({ field }) => (
                <Field orientation="horizontal" data-invalid={!!errors.privacy}>
                  <Checkbox
                    id="privacy"
                    name={field.name}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    onBlur={field.onBlur}
                  />
                  <FieldContent>
                    <FieldLabel htmlFor="privacy">
                      Acepto el aviso de privacidad{" "}
                      <span className="text-destructive">*</span>
                    </FieldLabel>
                  </FieldContent>
                </Field>
              )}
            />

            <Button
              type="submit"
              className="cursor-pointer"
              disabled={isSubmitting}
            >
              Enviar
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}

export default ContactForm;
