package fi.tuni.server;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Category {

    @Id
    @GeneratedValue
    private int id;
    private String title;

    public Category(String title) {
        this.title = title;
    }

    public Category() {

    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getId() {
        return id;
    }
    
    @Override
    public String toString() {
        return "Category{" +
                "id=" + id +
                ", title='" + title + '\''+
                '}';
    }
}