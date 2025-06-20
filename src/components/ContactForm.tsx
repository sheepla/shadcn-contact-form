
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";

type FormValues = {
  name: string;
  email: string;
  age: number | undefined;
  gender: "male" | "female" | "other";
  category: string;
  message: string;
  subscribe: boolean;
  agree: boolean;
  appointmentDate: Date | undefined;
};

export function ContactForm() {
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      age: undefined,
      gender: "other",
      category: "",
      message: "",
      subscribe: false,
      agree: false,
      appointmentDate: undefined,
    },
  });

  function onSubmit(data: FormValues) {
    alert(JSON.stringify(data))
    // console.log("送信データ:", data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-xl mx-auto space-y-6 p-6">

        {/* タイトル */}
        <h1 className="text-2xl font-semibold text-center mb-6">お問い合わせ</h1>

        {/* 名前 */}
        <FormField
          control={form.control}
          name="name"
          rules={{ required: "名前は必須です" }}
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center space-x-4">
                <FormLabel className="w-32 mb-0 text-right">名前</FormLabel>
                <FormControl className="flex-1">
                  <Input placeholder="お名前を入力してください" {...field} />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* メール */}
        <FormField
          control={form.control}
          name="email"
          rules={{ required: "メールは必須です" }}
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center space-x-4">
                <FormLabel className="w-32 mb-0 text-right">メールアドレス</FormLabel>
                <FormControl className="flex-1">
                  <Input type="email" placeholder="email@example.com" {...field} />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 年齢 */}
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center space-x-4">
                <FormLabel className="w-32 mb-0 text-right">年齢</FormLabel>
                <FormControl className="flex-1">
                  <Input type="number" min={0} {...field} />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 性別 */}
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center space-x-4">
                <FormLabel className="w-32 mb-0 text-right">性別</FormLabel>
                <FormControl className="flex-1">
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex flex-row space-x-4"
                  >
                    <FormItem className="flex items-center space-x-2 mb-0">
                      <RadioGroupItem value="male" id="gender-male" />
                      <FormLabel htmlFor="gender-male" className="mb-0 cursor-pointer">
                        男性
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2 mb-0">
                      <RadioGroupItem value="female" id="gender-female" />
                      <FormLabel htmlFor="gender-female" className="mb-0 cursor-pointer">
                        女性
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2 mb-0">
                      <RadioGroupItem value="other" id="gender-other" />
                      <FormLabel htmlFor="gender-other" className="mb-0 cursor-pointer">
                        その他
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* カテゴリ */}
        <FormField
          control={form.control}
          name="category"
          rules={{ required: "カテゴリを選んでください" }}
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center space-x-4">
                <FormLabel className="w-32 mb-0 text-right">カテゴリ</FormLabel>
                <FormControl className="flex-1">
                  <Select onValueChange={field.onChange} value={field.value} defaultValue="">
                    <SelectTrigger>
                      <SelectValue placeholder="カテゴリを選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="feedback">フィードバック</SelectItem>
                      <SelectItem value="inquiry">お問い合わせ</SelectItem>
                      <SelectItem value="support">サポート</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* メッセージ */}
        <FormField
          control={form.control}
          name="message"
          rules={{ required: "メッセージは必須です" }}
          render={({ field }) => (
            <FormItem>
              <div className="flex items-start space-x-4">
                <FormLabel className="w-32 pt-2 text-right">メッセージ</FormLabel>
                <FormControl className="flex-1">
                  <Textarea {...field} />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ニュースレター購読 */}
        <FormField
          control={form.control}
          name="subscribe"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-3">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <FormLabel className="mb-0 cursor-pointer">ニュースレターを購読する</FormLabel>
            </FormItem>
          )}
        />

        {/* 利用規約同意 */}
        <FormField
          control={form.control}
          name="agree"
          rules={{ required: "利用規約に同意してください" }}
          render={({ field }) => (
            <FormItem className="flex items-center space-x-3">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <FormLabel className="mb-0 cursor-pointer">利用規約に同意する</FormLabel>
            </FormItem>
          )}
        />

        {/* 希望日 */}
        <FormField
          control={form.control}
          name="appointmentDate"
          rules={{ required: "日付を選択してください" }}
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center space-x-4">
                <FormLabel className="w-32 mb-0 text-right">希望日</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Input
                        placeholder="日付を選択"
                        value={field.value ? field.value.toLocaleDateString() : ""}
                        readOnly
                      />
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          送信
        </Button>
      </form>
    </Form>
  );
}
