package entity

import "gorm.io/gorm"

type Member struct {
	gorm.Model
	Firstname string
	Lastname  string
	Country   string

	Email    string `gorm:"uniqueIndex"`
	Password string
	Phone    string
}
