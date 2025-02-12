import * as React from "react"

import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

export function ContatoForm() {
  return (
    <div className="flex justify-center">
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Contato</CardTitle>
        <CardDescription>Aqui você pode entrar em contato com nossa equipe.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="Seu nome" required />
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Seu email" required />
              
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="motivo">Motivo do contato</Label>
              <Select>
                <SelectTrigger id="motivo">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="bug">Reportar bug</SelectItem>
                  <SelectItem value="duvida">Dúvidas</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="mensagem">Mensagem</Label>
              <Input id="mensagem" name="mensagem" placeholder="Deixe aqui sua mensagem" required  ></Input>
              <Button type="submit" value="enviar">Enviar</Button>
              
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
    </div>
  )
}
